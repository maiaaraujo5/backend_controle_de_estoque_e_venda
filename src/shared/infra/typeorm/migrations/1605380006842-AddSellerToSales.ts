import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddSellerToSales1605380006842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'seller_id',
                type: 'uuid',
                isNullable: true
            })
        )

        await queryRunner.createForeignKey(
            'sales',
            new TableForeignKey({
                name: 'SalesProductSellerId',
                columnNames: ['seller_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'sellers',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sales', 'SalesProductSellerId')
        await queryRunner.dropColumn('sales', 'seller_id')
    }
}
