import { MigrationInterface, QueryRunner } from "typeorm";

export class FixColumNameAddresses1683211172756 implements MigrationInterface {
    name = 'FixColumNameAddresses1683211172756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipdCode" TO "zipCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "zipdCode"`);
    }

}
