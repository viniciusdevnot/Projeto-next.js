import styles from "./styles.module.scss";
import { FormContato2 } from "../../FormContato2";

export function Defensor() {
    return (
        <div style={{ backgroundColor: "#000" }}>
            <div className={styles.imgtop}>
                <div>
                    <img className={styles.logo} src="images/RR-CONSULTORIA 2.png" />

                    <div className={styles.conteudo}>
                        <div className={styles.linha}></div>
                        <h1>
                            {/* Regimento interno - As leis da sua empresa */}
                        </h1>
                        <p>
                            {/* Segundo um princípio básico do direito, não existe crime sem lei anterior que o defina. Partindo desse pressuposto foi criado o Regimento Interno, ou seja, um documento com as leis internas da sua empresa.  */}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imgtop1}>
                <div className={styles.lista}>
                    <div>
                        <iframe
                            className={styles.iframes}
                            src="https://www.youtube.com/embed/Y3TqZHsB9U8"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.conteudo2}>
                    <div className={styles.linha}></div>
                    <h1>O que você vai encontrar no Defensor</h1>
                    <p>
                        o DEFENSOR você vai aprender os processos básicos de controle de estoque e como colocá-los em prática.
                        Estude bastante e faça os ajustes necessários para sua empresa, mas não deixe para amanhã o que você pode começar hoje,
                        afinal, seu estoque pode estar aberto sem controle e todo mundo pegando o que quer, quando quer. Sem controle não existe sucesso.
                    </p>
                </div>
            </div>

            <div className={styles.cards2}>

                <div className={styles.containercard}>
                    <div>
                        <img
                            className={styles.imguser}
                            src="/images/5a62fa28b237a3604464cf8bdd3a8677.png"
                        />
                        <div>

                            <h2>Rennan
                                Ribeiro</h2>
                            {/* <h6>(Ivana Menezes Store)</h6> */}
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                            Muitas vezes eu pensei no meu estoque como apenas produtos, mas, depois de mais de 15 anos de mercado
                            e várias consultorias realizadas, eu vejo que o sucesso dos negócios de alimentação está diretamente
                            ligado a maneira como os donos veem o estoque das suas empresas. ESTOQUE = DINHEIRO $$
                        </p>
                    </div>
                </div>
            </div>

            <FormContato2 />
            <div className={styles.arquivo}>
            <a href="documents/doc1.docx">
                  <button className={styles.botaoDownload}>Download</button>
                </a>
                </div>
        </div>
    );
}