import { BeforeCreate, BeforeUpdate, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import * as bcrypt from 'bcrypt';
import { Art } from "../art/art.model";
@Table
export class User extends Model {

  @Column({
    type: DataType.NUMBER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  login: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;

  @BeforeCreate
  @BeforeUpdate

  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, parseInt(process.env.SALT))
  }
  validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
  @HasMany(() => Art)
  arts: Art[];
}