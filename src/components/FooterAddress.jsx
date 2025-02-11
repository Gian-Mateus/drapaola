import { motion } from "motion/react";

export default function FooterAddress() {
  return (
    <motion.div className="flex flex-col items-center gap-2 border-t border-yellow-50 pt-6">
      <motion.span className="text-sm">
        Rua Exemplo, 123 - Bairro Exemplo, Cidade - UF
      </motion.span>
      <motion.span className="text-sm">
        © 2023 Todos os direitos reservados
      </motion.span>
    </motion.div>
  );
}
