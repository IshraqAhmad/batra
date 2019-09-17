import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

export abstract class AppBaseEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdUserId: number;

    @Column()
    tenantId: number;

    @Column()
    createdDate: Date;

    @Column()
    updatedUserId: number;

    @Column()
    updatedDate: Date;
}