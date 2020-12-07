import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class DeleteColumnsFromSales1607284694958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('sales', 'SalesProductVariationId')
        await queryRunner.dropColumn('sales', 'product_variation_id')
        await queryRunner.dropColumn('sales', 'price')
        await queryRunner.dropColumn('sales', 'quantity')
        await queryRunner.dropColumn('sales', 'status')

        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'price',
                type: 'decimal',
                precision: 10,
                scale: 2,
            },)
        )
        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'quantity',
                type: 'int',
            })
        )
        await queryRunner.addColumn(
            'sales',
            new TableColumn({
                name: 'status',
                type: 'varchar'
            })
        )
    }

}
