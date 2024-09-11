/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('accessory_vehicle', table => {
    table.integer('accessory_id').notNullable().unsigned();
    table.foreign('accessory_id')
      .references('id')
      .inTable('accessories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('vehicle_id').notNullable().unsigned();
    table.foreign('vehicle_id')
      .references('id')
      .inTable('vehicles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.primary(['accessory_id', 'vehicle_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('accessory_vehicle');
};
