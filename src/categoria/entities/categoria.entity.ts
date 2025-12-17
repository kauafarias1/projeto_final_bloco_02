import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tb_categoria' })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    nome: string;

    @Column({ length: 255, nullable: false})
    descricao: string;

    @Column({ type: 'boolean', default: true })
    restricaoReceita: boolean

    @Column({ length: 255, nullable: false})
    faixaEtaria: string
    
    @Column({ length: 255, nullable: false })
    tipo: string;
}