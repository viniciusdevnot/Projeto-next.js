import styles from "./styles.module.scss";
import { FormContato2 } from "../../FormContato2";

export function Destruidor() {
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
                    <h1>O que você vai encontrar no Destruidor de Pesadelos?</h1>
                    <p>
                        Neste documento você vai aprender todo o processo administrativo padrão de uma empresa profissional,
                        para aplicar e treinar você mesmo toda sua equipe. Não deixe que seu negócio se torne um pesadelo,
                        baixe agora nosso material e comece a treinar sua equipe.
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

                            <h2>Fabio
                                Souza</h2>
                            <h6>(Ermenilde Restaurante)</h6>
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                            Com a aplicação do regimento interno atrelado ao processo padrão de caixas,
                            nós conseguimos controlar nossas vendas e abrir mais de 4 unidades no estado do Tocantins.
                            Mas lembre-se, sem processos não há evolução.
                        </p>
                    </div>
                </div>
            </div> 

            <FormContato2 />
            <div className={styles.arquivo}>
            <a href="documents/destruidor.docx">
                  <button className={styles.botaoDownload}>Download</button>
                </a>
                </div>
        </div>
    );
}