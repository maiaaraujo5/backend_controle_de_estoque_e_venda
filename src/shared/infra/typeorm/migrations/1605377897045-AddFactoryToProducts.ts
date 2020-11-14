import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddFactoryToProducts1605377897045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products',
            new TableColumn({
                name: 'factory_id',
                type: 'uuid',
                isNullable: true
            }));

        await queryRunner.createForeignKey(
            'products',
            new TableForeignKey({
                name: 'ProductFactory',
                columnNames: ['factory_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'factories',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'ProductFactory')
        await queryRunner.dropColumn('appointments', 'factory_id')
    }


}
