import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddProductVaritionToSales1605379659387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'product_variation_id',
                type: 'uuid',
                isNullable: true
            })
        )

        await queryRunner.createForeignKey(
            'sales',
            new TableForeignKey({
                name: 'SalesProductVariationId',
                columnNames: ['product_variation_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products_variations',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sales', 'SalesProductVariationId')
        await queryRunner.dropColumn('sales', 'product_variation_id')
    }

}
