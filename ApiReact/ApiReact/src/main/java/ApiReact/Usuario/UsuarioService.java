package ApiReact.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import java.util.Base64;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usersRep;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    public Iterable<Usuario> getUsersDb(){
        return usersRep.findAll();
    }

    public Usuario insert(Usuario usuario){
        Optional<Usuario> emailUser = usersRep.findByEmail(usuario.getEmail());
        Assert.isNull(usuario.getId(), "Não foi possível inserir usuario");
        if (emailUser.isPresent()){
            throw new RuntimeException("Email Existente");
        }else {
            String senhaCrip = passwordEncoder.encode(usuario.getSenha());
            usuario.setSenha(senhaCrip);
            usersRep.save(usuario);
            return usersRep.save(usuario);
        }
    }

    public Usuario update(Usuario usuario, Integer id) {
        Optional<Usuario> user = usersRep.findById(id);

        if (user.isPresent()) {
            String senhaCrip = passwordEncoder.encode(usuario.getSenha());
            Usuario db = user.get();
            db.setUsername(usuario.getUsername());
            db.setEmail(usuario.getEmail());
            db.setSenha(senhaCrip);

            usersRep.save(db);
            return db;
        }
        throw new RuntimeException("Carro não Atualizado");
    }

    public boolean delete(Integer id){
        Optional<Usuario> user = usersRep.findById(id);
        if (user.isPresent()) {
            usersRep.deleteById(id);
            return true;
        } else {
            return false;
        }

    }

}
