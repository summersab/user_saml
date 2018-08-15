OC.L10N.register(
    "user_saml",
    {
    "Saved" : "შენახულია",
    "X.509 certificate of the Service Provider" : "სერვისის მომწოდებლის X.509 სერტიფიკატი",
    "Private key of the Service Provider" : "სერვისის მომწოდებლის პირადი გასაღები",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "ანიშნებს რომ ამ SP-ს მეშვეობით გამოგზავნილი <samlp:logoutRequest>-ის nameID იქნება დაშიფრული.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "ანიშნებს ამ SP-ს მეშვეობით გამოგზავნილი <samlp:AuthnRequest> ხელმოწერილ იქნება თუ არა. [ამ ინფორმაციას მოგვაწოდებს SP-s მეტა მონაცემები]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "ანიშნებს ამ SP-ს მეშვეობით გამოგზავნილი <samlp:logoutRequest> ხელმოწერილ იქნება თუ არა.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "ანიშნებს ამ SP-ს მეშვეობით გამოგზავნილი <samlp:logoutResponse> ხელმოწერილ იქნება თუ არა.",
    "Whether the metadata should be signed." : "უნდა მოეწეროს თუ არა მეტა-მონაცემებს ხელი.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "ანიშნებს მოთხოვნილებას, ამ SP-ს საშუალებით მიღებულ <samlp:Response>, <samlp:LogoutRequest> და <samlp:LogoutResponse> ელემენტებს უნდა მოეწეროთ ხელი თუ არა.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "ანიშნებს მოთხოვნილებას, ამ SP-ს საშუალებით მიღებულ <saml:Assertion> ელემენტებს უნდა მოეწეროთ ხელი თუ არა. [ამ ინფორმაციას მოგვაწოდებს SP-s მეტა მონაცემები]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "ანიშნებს მოთხოვნილებას, ამ SP-ს საშუალებით მიღებული <saml:Assertion> ელემენტები უნდა დაიშიფროს თუ არა.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "ანიშნებს მოთხოვნილებას ამ SP-ს მეშვეობით მიღებულ SAMLResponse-ში უნდა იყოს თუ არა NameID ელემენტი.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "ანიშნებს მოთხოვნილებას, ამ SP-ს საშუალებით მიღებული NameID უნდა დაიშიფროს თუ არა.",
    "Indicates if the SP will validate all received XML." : "ანიშნებს გაუწევს თუ არა SP ვალიდაციას ყველა შემოსულ XML-ს.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL უწევს SAML მონაცემებს კოდირებას პატარა ასოებით, ხელსაწყობის ნაკრები კი საწყისად იყენებს დიდ ასოებს. ჩართეთ ADFS თავსებადობა ხელმოწერის დამოწმებებზე.",
    "Attribute to map the UID to." : "ატრიბუტი რომელსაც მიებმევა UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "აუტენტიფიკაციის უფლება დართეთ მხოლოდ მაშინ, თუ ანგარიში არსებობს რაიმე სხვა ბექენდზეც. (მაგ. LDAP-ზე)",
    "Attribute to map the displayname to." : "ატრიბუტი რომელსაც მიებმევა დისპლეის სახელი.",
    "Attribute to map the email address to." : "ატრიბუტი რომელსაც მიებმევა ელ-ფოსტის მისამართი.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "გამოიყენეთ SAML აუტენტიფიკაცია %s დესკტოპ კლიენტებისთვის (საჭიროებს ხელახალ აუტენტიფიკაციას)",
    "SSO & SAML authentication" : "SSO და SAML აუტენტიფიკაცია",
    "Open documentation" : "ღია დოკუმენტაცია",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "აუცილებლად გაუწიეთ კონფიგურაცია ადმინისტრაციულ მომხმარებელს, რომელსაც გააჩნია ნიმუშზე SSO წვდომა. თქვენი ჩვეულებრივი %s ანგარიშით ავტორიზაცია მეტი შესაძლებელი აღარ იქნება.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "გთხოვთ აირჩიოთ აუტენტიფიკაცია გსურთ Nextcloud-ში ჩაშენებული SAML მომწოდებელით თუ გსურთ აუტენტიფიკაცია სხვა გარემოს ცვლადის წინააღმდეგ.",
    "Use built-in SAML authentication" : "ჩაშენებული SAML აუტენტიფიკაციის გამოყენება",
    "Use environment variable" : "გარემოში არსებული ცვლადის გამოყენება",
    "General" : "მთავარი",
    "Service Provider Data" : "სერვისის მომწოდებლის მონაცემები",
    "If your Service Provider should use certificates you can optionally specify them here." : "თუ თქვენი სერვის პროვაიდერი უნდა იყენებდეს სერტიფიკატებს, სურვილისამებრ შეგიძლიათ ისინი აქ ჩამოწეროთ.",
    "Show Service Provider settings…" : "სერვისის მომწოდებლის პარამეტრების ჩვენება...",
    "Identity Provider Data" : "იდენტობის მომწოდებლის მონაცემები",
    "Configure your IdP settings here." : "დააყენეთ თქვენი IdP-ის პარამეტრები აქ.",
    "Identifier of the IdP entity (must be a URI)" : "IdP შენატანის იდენტიფიკატორი (უნდა იყოს URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "IdP-s URL მისამართი სადაც SP გააგზავნის აუტენტიფიკაციის მოთხოვნის წერილს",
    "Show optional Identity Provider settings…" : "არა-აუცილებელი იდენტობის პროვაიდერის პარამეტრების ჩვენება...",
    "URL Location of the IdP where the SP will send the SLO Request" : "IdP-ს URL მისამართ სადაც SP გააგზავნის SLO მოთხოვნას",
    "Public X.509 certificate of the IdP" : "IdP-ს ღია X.509 სერტიფიკატი",
    "Attribute mapping" : "ატრიბუტების ბმები",
    "If you want to optionally map attributes to the user you can configure these here." : "არაა აუცილებელი, მაგრამ თუ გსურთ ატრიბუტების მიბმა მომხმარებელთან, შეგიძლიათ კონფიგურაცია შეასრულოთ აქ.",
    "Show attribute mapping settings…" : "ატრიბუტების მიბმის პარამეტრების ჩვენება...",
    "Security settings" : "უსაფრთხოების პარამეტრები",
    "For increased security we recommend enabling the following settings if supported by your environment." : "გაუმჯობესებული უსაფრთხოებისთვის, რეკომენდაციას გიწევთ, შესაძლებლობის შემთხვევაში, აამოქმედოთ შემდეგი პრამეტრები.",
    "Show security settings…" : "უსაფრთხოების პარამეტრების ჩვენება...",
    "Signatures and encryption offered" : "შემოთავაზებული ხელმოწერები და შიფრაციები",
    "Signatures and encryption required" : "ხელმოწერები და შიფრაციები აუცილებელია",
    "Download metadata XML" : "XML მეტა-მონაცემების გადმოწერა",
    "Metadata invalid" : "მეტა-მონაცემი არასწორია",
    "Metadata valid" : "მეტა-მონაცემი სწორია",
    "Account not provisioned." : "ანგარიში არაა გათვალისწინებული.",
    "Your account is not provisioned, access to this service is thus not possible." : "თქვენი ანგარიში არაა გათვალისწინებული, ამ სერვისისადმი წვდომა შესაბამისად შეუძლებელია.",
    "Indicates if the SP will validate all received XMLs." : "ანიშნებს გაუწევს თუ არა SP ვალიდაციას ყველა შემოსულ XML-ს.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "აუტენტიფიკაციის უფლება დართეთ მხოლოდ მაშინ, თუ ანგარიში არსებობს რაიმე სხვა ბექენდზეც. (მაგ. LDAP-ზე)",
    "Show Service Provider settings ..." : "სერვისის მომწოდებლის პარამეტრების ჩვენება ...",
    "Show optional Identity Provider settings ..." : "არა-აუცილებელი იდენტობის პროვაიდერის პარამეტრების ჩვენება ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "არაა აუცილებელი, მაგრამ თუ გსურთ SAML ატრიბუტების მიბმა მომხმარებელთან, შეგიძლიათ კონფიგურაცია შეასრულოთ აქ.",
    "Show attribute mapping settings ..." : "ატრიბუტების მიბმის პარამეტრების ჩვენება ...",
    "Show security settings ..." : "უსაფრთხოების პარამეტრების ჩვენება ..."
},
"nplurals=2; plural=(n!=1);");
