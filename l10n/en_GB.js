OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "This user account is disabled, please contact your administrator.",
    "Saved" : "Saved",
    "Unknown error, please check the log file for more details." : "Unknown error, please check the log file for more details.",
    "Direct log in" : "Direct log in",
    "SSO & SAML log in" : "SSO & SAML log in",
    "X.509 certificate of the Service Provider" : "X.509 certificate of the Service Provider",
    "Private key of the Service Provider" : "Private key of the Service Provider",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed.",
    "Whether the metadata should be signed." : "Whether the metadata should be signed.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indicates a requirement for the NameID received by this SP to be encrypted.",
    "Indicates if the SP will validate all received XML." : "Indicates if the SP will validate all received XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification.",
    "Attribute to map the UID to." : "Attribute to map the UID to.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Only allow authentication if an account exists on some other backend. (e.g. LDAP)",
    "Attribute to map the displayname to." : "Attribute to map the displayname to.",
    "Attribute to map the email address to." : "Attribute to map the email address to.",
    "Attribute to map the quota to." : "Attribute to map the quota to.",
    "Attribute to map the users groups to." : "Attribute to map the users groups to.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Use SAML auth for the %s desktop clients (requires user re-authentication)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Optional display name of the identity provider (default: \"SSO & SAML log in\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Allow the use of multiple user back-ends (e.g. LDAP)",
    "SSO & SAML authentication" : "SSO & SAML authentication",
    "Authenticate using single sign-on" : "Authenticate using single sign-on",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix.",
    "Open documentation" : "Open documentation",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"" : "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable.",
    "Use built-in SAML authentication" : "Use built-in SAML authentication",
    "Use environment variable" : "Use environment variable",
    "General" : "General",
    "Service Provider Data" : "Service Provider Data",
    "If your Service Provider should use certificates you can optionally specify them here." : "If your Service Provider should use certificates you can optionally specify them here.",
    "Show Service Provider settings…" : "Show Service Provider settings…",
    "Identity Provider Data" : "Identity Provider Data",
    "Configure your IdP settings here." : "Configure your IdP settings here.",
    "Identifier of the IdP entity (must be a URI)" : "Identifier of the IdP entity (must be a URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL Target of the IdP where the SP will send the Authentication Request Message",
    "Show optional Identity Provider settings…" : "Show optional Identity Provider settings…",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL Location of the IdP where the SP will send the SLO Request",
    "Public X.509 certificate of the IdP" : "Public X.509 certificate of the IdP",
    "Attribute mapping" : "Attribute mapping",
    "If you want to optionally map attributes to the user you can configure these here." : "If you want to optionally map attributes to the user you can configure these here.",
    "Show attribute mapping settings…" : "Show attribute mapping settings…",
    "Security settings" : "Security settings",
    "For increased security we recommend enabling the following settings if supported by your environment." : "For increased security we recommend enabling the following settings if supported by your environment.",
    "Show security settings…" : "Show security settings…",
    "Signatures and encryption offered" : "Signatures and encryption offered",
    "Signatures and encryption required" : "Signatures and encryption required",
    "Download metadata XML" : "Download metadata XML",
    "Metadata invalid" : "Metadata invalid",
    "Metadata valid" : "Metadata valid",
    "Account not provisioned." : "Account not provisioned.",
    "Your account is not provisioned, access to this service is thus not possible." : "Your account is not provisioned, access to this service is thus not possible.",
    "Indicates if the SP will validate all received XMLs." : "Indicates if the SP will validate all received XMLs.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)",
    "Show Service Provider settings ..." : "Show Service Provider settings ...",
    "Show optional Identity Provider settings ..." : "Show optional Identity Provider settings ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "If you want to optionally map SAML attributes to the user you can configure these here.",
    "Show attribute mapping settings ..." : "Show attribute mapping settings ...",
    "Show security settings ..." : "Show security settings ..."
},
"nplurals=2; plural=(n != 1);");
