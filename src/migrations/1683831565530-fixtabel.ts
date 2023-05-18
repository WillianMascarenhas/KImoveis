import { MigrationInterface, QueryRunner } from "typeorm";

export class Fixtabel1683831565530 implements MigrationInterface {
    name = 'Fixtabel1683831565530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "time" TO "hour"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "hour" TO "time"`);
    }

}
