import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddVariationToProductVariations1605379287358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products_variations',
            new TableColumn({
                name: 'variation_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'products_variations',
            new TableForeignKey({
                name: 'ProductVariationsVariationId',
                columnNames: ['variation_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'variations',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products_variations', 'ProductVariationsVariationId');

        await queryRunner.dropColumn('products_variations', 'variation_id');
    }


}
