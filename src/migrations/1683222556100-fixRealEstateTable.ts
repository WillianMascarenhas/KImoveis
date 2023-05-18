import { MigrationInterface, QueryRunner } from "typeorm";

export class FixRealEstateTable1683222556100 implements MigrationInterface {
    name = 'FixRealEstateTable1683222556100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP NOT NULL`);
    }

}
