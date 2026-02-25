import bcrypt from "bcryptjs";
import { UserRepository } from "@/repositories/userRepository";

export class UserService {
  /**
   * Crée un nouvel utilisateur après avoir hashé son mot de passe.
   *
   * Le hash est effectué ici, dans la couche service, et non dans le repository :
   * le repository ne connaît que le stockage, pas la logique métier de sécurité.
   *
   * Le facteur de coût bcrypt est fixé à 12 (bon compromis sécurité/performance
   * en 2024 : ~250ms par hash sur un serveur standard).
   */
  static async registerUser(data: {
    firstname: string;
    name: string;
    email: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    return UserRepository.createUser({ ...data, password: hashedPassword });
  }
}
