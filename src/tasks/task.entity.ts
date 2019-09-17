import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TaskStatus } from './task-status.enum';
import { User } from "../auth/user.entity";
import { AppBaseEntity } from "../base/app.base.entity";

@Entity()
export class Task extends AppBaseEntity {

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;

    @ManyToOne(type => User, user => user.tasks, { eager: false } )
    user: User;

    @Column()
    userId: number;
}