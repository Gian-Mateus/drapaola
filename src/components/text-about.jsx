import { motion } from "motion/react";

export const TextAbout = ({ props, animation }) => {
    return (
        <motion.div
            variants={animation}
            className="mb-10 flex min-w-72 flex-col gap-12 p-6 text-amber-100 font-light"
        >
            <motion.section>
                <motion.h2 className="font-title text-3xl font-bold">
                    Quem sou eu?
                </motion.h2>
                <motion.p>
                    Sou especialista em Harmonização Facial, e meu compromisso é
                    oferecer um atendimento humanizado e acolhedor. Minha maior
                    prioridade é entender suas necessidades e expectativas,
                    proporcionando soluções personalizadas para realçar sua beleza
                    natural com segurança e equilíbrio. Com uma abordagem cuidadosa
                    e detalhista, busco garantir seu conforto e confiança em cada
                    procedimento, tornando sua experiência única e transformadora.
                </motion.p>
            </motion.section>
            <motion.section>
                <motion.h2 className="font-title text-3xl font-bold">
                    Formação
                </motion.h2>
                <motion.div>
                    Meu compromisso com a excelência se reflete
                    nos cursos e treinamentos práticos que realizei, garantindo
                    atualização constante e domínio das técnicas mais avançadas.
                    <motion.ul>
                        <motion.li className="indent-4 list-disc list-inside italic font-bold">
                            Especialização em Harmonização Facial
                        </motion.li>
                        <motion.li className="indent-4 list-disc list-inside italic font-bold">
                            Curso Intensivo Prático em Harmonização (Toxina Botulínica, Preenchimento, Bioestimuladores)
                        </motion.li>
                        <motion.li className="indent-4 list-disc list-inside italic font-bold">
                            Cursos de Imersão em Facetas e Resina
                        </motion.li>
                    </motion.ul>
                    Com os anos de experiência, já tive a oportunidade de transformar a autoestima de diversos pacientes, sempre com atenção aos detalhes e utilizando materiais premium.
                </motion.div>
            </motion.section>
        </motion.div>
    )
}