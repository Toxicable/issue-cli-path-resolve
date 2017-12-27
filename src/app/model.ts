import { PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity()
export class MyModel{
    @PrimaryGeneratedColumn()
    id: number;
}