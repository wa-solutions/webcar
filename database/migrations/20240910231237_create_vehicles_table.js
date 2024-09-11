/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', table => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('year_manufacture').notNullable().unsigned();
    table.integer('year_model').notNullable().unsigned();
    table.integer('price').notNullable().unsigned();
    table.integer('discount').nullable().unsigned();
    table.string('license_plate').nullable();
    table.integer('km').nullable().unsigned();
    table.string('engine', 255).nullable();
    table.integer('brand_id').nullable().unsigned();
    table.foreign('brand_id')
      .references('id')
      .inTable('brands')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
    table.integer('category_id').nullable().unsigned();
    table.foreign('category_id')
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
    table.integer('fuel_id').nullable().unsigned();
    table.foreign('fuel_id')
      .references('id')
      .inTable('fuels')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
    table.integer('door_id').nullable().unsigned();
    table.foreign('door_id')
      .references('id')
      .inTable('doors')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
    table.integer('transmission_id').nullable().unsigned();
    table.foreign('transmission_id')
      .references('id')
      .inTable('transmissions')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
