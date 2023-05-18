import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTableUser1683552523455 implements MigrationInterface {
    name = 'FixTableUser1683552523455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deleteddAt" TO "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "deleteddAt"`);
    }

}
