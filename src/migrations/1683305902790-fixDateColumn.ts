import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDateColumn1683305902790 implements MigrationInterface {
    name = 'FixDateColumn1683305902790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteddAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteddAt" TIMESTAMP DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteddAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteddAt" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" date NOT NULL`);
    }

}
