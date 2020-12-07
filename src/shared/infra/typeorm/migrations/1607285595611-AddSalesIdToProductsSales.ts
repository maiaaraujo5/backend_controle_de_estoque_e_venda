import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddSalesIdToProductsSales1607285595611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products_sales',
            new TableColumn({
                name: 'sale_id',
                type: 'uuid',
                isNullable: false
            })
        )

        await queryRunner.createForeignKey(
            'products_sales',
            new TableForeignKey({
                name: 'SalesId',
                referencedTableName: 'sales',
                referencedColumnNames: ['id'],
                columnNames: ['sale_id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products_sales', 'SalesId')
        await queryRunner.dropColumn('products_sales', 'sale_id')
    }

}
