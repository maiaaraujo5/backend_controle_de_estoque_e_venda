import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddCategoryToProducts1605377565099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products',
            new TableColumn({
                name: 'category_id',
                type: 'uuid',
                isNullable: true
            }));

        await queryRunner.createForeignKey(
            'products',
            new TableForeignKey({
                name: 'ProductCategory',
                columnNames: ['category_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'categories',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'ProductCategory')
        await queryRunner.dropColumn('products', 'category_id')
    }

}
