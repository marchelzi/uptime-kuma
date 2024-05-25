exports.up = function (knex) {
    // add column source_address to monitor
    return knex.schema
        .alterTable("monitor", function (table) {
            table.string("source_address", 255).notNullable().defaultTo("");
        });
};

exports.down = function (knex) {
    // drop column source_address from monitor
    return knex.schema
        .alterTable("monitor", function (table) {
            table.dropColumn("source_address");
        });
};
