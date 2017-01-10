package security;

import java.security.Key;
//import io.jasonwebtoken.impl.crypto.MacProvider;

import io.jsonwebtoken.impl.crypto.MacProvider;

public class SecretKeyGenerator {

//	public SecretKeyGenerator() {
//	}
	
	private final Key SECRET_KEY = MacProvider.generateKey();

	  public Key getSecretKey() {
		  return SECRET_KEY;
	  }


}
