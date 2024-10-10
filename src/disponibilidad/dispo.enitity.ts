import {
  Entity,
  Property,
  ManyToOne,
  Rel,
  OneToMany,
  Collection,
  Cascade,
} from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Kinesiologo } from '../kinesiologo/kinesiologo.entity.js'


@Entity ()
export class Disponibilidad extends BaseEntity {
  @Property({nullable:false})
  fecha !: Date

  @Property({nullable:false})
  hora !: string

  @Property({nullable:false})
  estado !: string
  
  @ManyToOne(() => Kinesiologo, {nullable:false})
  kinesiologo !: Rel <Kinesiologo>

}   