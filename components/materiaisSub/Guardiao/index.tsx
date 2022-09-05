import styles from "./styles.module.scss";
import { FormContato2 } from "../../FormContato2";

export function Guardiao() {
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
                    <h1>O que você vai encontrar no Guardião?</h1>
                    <p>
                        Neste documento você vai aprender as ferramentas e processos de abertura até o fechamento de caixa,
                        de maneira prática e realizável dentro da sua empresa. Mas lembre-se, tudo antes de ficar bom,
                        vai ficar ruim. Haverão reclamações e pessoas dizendo que não vai dar certo, persevere e mantenha
                        o foco, no final EU GARANTO que vai valer a pena.
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

                            <h2>Daniel
                                Oliveira</h2>
                            <h6>(Grupo Dona Maria)</h6>
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                            Com a aplicação do regimento interno atrelado ao processo padrão de caixas, nós conseguimos
                            controlar nossas vendas e abrir mais de 4 unidades no estado do Tocantins. Mas lembre-se,
                            sem processos não há evolução.

                        </p>
                    </div>
                </div>
            </div>

            <FormContato2 />
            <div className={styles.arquivo}>
            <a href="documents/guardiao.docx">
                  <button className={styles.botaoDownload}>Download</button>
                </a>
                </div>
        </div>
    );
}