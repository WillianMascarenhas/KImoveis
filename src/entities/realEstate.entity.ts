import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./shcedules.entity";

@Entity("real_estate")
class RealEstate{

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: "boolean", default: false})
    sold: boolean 

    @Column({type: "decimal", precision: 12, scale: 2, default: 0}) 
    value: number | string

    @Column({type: "integer"})
    size: number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToOne(() => Address, (address) => address.real_estate, { onDelete: "CASCADE"})
    @JoinColumn() 
    address: Address

    @ManyToOne(() => Category)
    category: Category

    @OneToMany(() => Schedule, schedule => schedule.realEstate)
    schedules: Schedule[]
}

export { RealEstate } 