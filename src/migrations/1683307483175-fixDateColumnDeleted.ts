import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDateColumnDeleted1683307483175 implements MigrationInterface {
    name = 'FixDateColumnDeleted1683307483175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteddAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteddAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteddAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteddAt" TIMESTAMP DEFAULT now()`);
    }

}
