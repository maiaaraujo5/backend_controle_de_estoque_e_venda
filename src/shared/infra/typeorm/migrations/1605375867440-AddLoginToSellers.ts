import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddLoginToSellers1605375867440 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'sellers',
            new TableColumn({
                name: 'login_id',
                type: 'uuid',
                isNullable: true
            }),
        );

        await queryRunner.createForeignKey(
            'sellers',
            new TableForeignKey({
                name: 'SellerLogin',
                columnNames: ['login_id'],
                referencedTableName: 'logins',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sellers', 'SellerLogin')

        await queryRunner.dropColumn('sellers', 'login_id')
    }

}
