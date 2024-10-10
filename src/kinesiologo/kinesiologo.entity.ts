import { Entity, Property, ManyToOne, Collection, Cascade, Rel, OneToMany } from "@mikro-orm/core";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";
/*import { Especialidad } from "../especialidad/especialidad.entity.js";*/
import { Consultorio } from '../consultorio/consultorio.entity.js';


@Entity()
export class Kinesiologo extends BaseEntity{
  @Property({ nullable:false })
  matricula !: string
  @Property({ nullable:false })
  nombre !: string
  @Property({ nullable:false })
  apellido !: string
  @Property({ nullable:false })
  mail !: string
  @Property({ nullable:false })
  password !: string
  @Property({ nullable:false })
  telefono !: number
  @Property({ nullable:false })
  dni  !: number
  /*@ManyToOne(()=> Especialidad, {nullable:false})
  especialidad !:Rel<Especialidad>*/
  @ManyToOne(() => Consultorio, {nullable: false })
  consultorio !: Rel<Consultorio>
}