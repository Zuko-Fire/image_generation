import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "../user/user.model";
@Table
export class Art extends Model {

  @Column({
    type: DataType.NUMBER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  src: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  name: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  prompt: string;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;


  @ForeignKey(() => User) 
  @Column
  userId: number;
  
  @BelongsTo(() => User)
  user: User;
}