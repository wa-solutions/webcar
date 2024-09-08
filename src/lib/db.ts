import knex from 'knex';
// @ts-ignore
import knexStringCase from 'knex-stringcase';

import knexfile from '../../knexfile';

export default knex(knexStringCase(knexfile.development));