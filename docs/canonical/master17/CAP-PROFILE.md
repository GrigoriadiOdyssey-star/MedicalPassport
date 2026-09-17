# CORE-CAP-PROFILE — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## emergency-contact-profiles

Profile owns source-scoped emergency contact relationships and authorized views; Identity owns account/representative authority and Notifications owns delivery. A family/caregiver label is contact metadata, not consent or permission to read the patient record.

Acceptance additions: Preserve relationship, verified contact channel, consent preferences and update provenance. Contact availability and notification acknowledgement are distinct; wrong-recipient and revoked-contact cases must deny or suppress disclosure.

## Source scope

- Original 15 / emergency-contact-profiles: Emergency Contacts Table — Stores emergency contacts for the user.
- Original 112 / emergency-contact-profiles: Emergency Contacts Management — Maintain emergency contacts and support calling, messaging, location sharing and notifications.
- Original 266 / emergency-contact-profiles: Emergency Contact Center — Notifications follow the patient's consent settings.

## Requirements and source metadata

<a id="M17-CAP-PROFILE-1ef0336fb14c2e7d"></a>
- **M17-CAP-PROFILE-1ef0336fb14c2e7d**: # Emergency Contacts Table
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-2f5fdcca89ef8e56"></a>
- **M17-CAP-PROFILE-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-b13ea872eb95e5cc"></a>
- **M17-CAP-PROFILE-b13ea872eb95e5cc**: Stores emergency contacts for the user.
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-6f33acf3afb37064"></a>
- **M17-CAP-PROFILE-6f33acf3afb37064**: ---
  Applies to original IDs: 15, 112, 266.

<a id="M17-CAP-PROFILE-90dc9b75b60f53a5"></a>
- **M17-CAP-PROFILE-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-c91610423a46692c"></a>
- **M17-CAP-PROFILE-c91610423a46692c**: id (UUID)
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-ff6fb316f9bc6c33"></a>
- **M17-CAP-PROFILE-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-47ca5d45c2e302c9"></a>
- **M17-CAP-PROFILE-47ca5d45c2e302c9**: full_name
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-a13bd1fdcce22c08"></a>
- **M17-CAP-PROFILE-a13bd1fdcce22c08**: relationship
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-0fb52a054ac630c9"></a>
- **M17-CAP-PROFILE-0fb52a054ac630c9**: phone
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-343184d0288e3a11"></a>
- **M17-CAP-PROFILE-343184d0288e3a11**: email
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-9fe94e819c56a7a3"></a>
- **M17-CAP-PROFILE-9fe94e819c56a7a3**: country
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-964c74225c44f6e8"></a>
- **M17-CAP-PROFILE-964c74225c44f6e8**: city
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-6069f44150b70c7b"></a>
- **M17-CAP-PROFILE-6069f44150b70c7b**: address
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-74110c40128fd662"></a>
- **M17-CAP-PROFILE-74110c40128fd662**: preferred_language
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-7b44bb3766d64676"></a>
- **M17-CAP-PROFILE-7b44bb3766d64676**: priority
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-731280ebcdbdf367"></a>
- **M17-CAP-PROFILE-731280ebcdbdf367**: medical_power_of_attorney
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-46822bb2bdcb92f0"></a>
- **M17-CAP-PROFILE-46822bb2bdcb92f0**: can_receive_location
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-aee5c799b24af467"></a>
- **M17-CAP-PROFILE-aee5c799b24af467**: can_receive_medical_data
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-53c72e39157f4a3d"></a>
- **M17-CAP-PROFILE-53c72e39157f4a3d**: notification_method
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-5754dd8ea427e6f0"></a>
- **M17-CAP-PROFILE-5754dd8ea427e6f0**: status
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-bcc951dbdead2bf5"></a>
- **M17-CAP-PROFILE-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-51db2c3a3a174a78"></a>
- **M17-CAP-PROFILE-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-2fac6cbf308c244b"></a>
- **M17-CAP-PROFILE-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-ed85b85272bcf6f9"></a>
- **M17-CAP-PROFILE-ed85b85272bcf6f9**: Emergency Contact
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-46172ef655d51ea4"></a>
- **M17-CAP-PROFILE-46172ef655d51ea4**: ├── User
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-41bd3320fb6ee128"></a>
- **M17-CAP-PROFILE-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-472b57df71117908"></a>
- **M17-CAP-PROFILE-472b57df71117908**: ├── SOS
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-efa2a8ae50719ab3"></a>
- **M17-CAP-PROFILE-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-225d721817a80b2f"></a>
- **M17-CAP-PROFILE-225d721817a80b2f**: ├── Notifications
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-37bfdffca1a32095"></a>
- **M17-CAP-PROFILE-37bfdffca1a32095**: Future Features
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-12fafbb9e1ccec9a"></a>
- **M17-CAP-PROFILE-12fafbb9e1ccec9a**: One-Tap Emergency Call
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-28b96ee2b50c782b"></a>
- **M17-CAP-PROFILE-28b96ee2b50c782b**: SMS Alerts
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-48fe5c82ef1e5a75"></a>
- **M17-CAP-PROFILE-48fe5c82ef1e5a75**: GPS Sharing
  Applies to original IDs: 15, 112.

<a id="M17-CAP-PROFILE-fe731be9f5c78107"></a>
- **M17-CAP-PROFILE-fe731be9f5c78107**: Live Status
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-4fa8f7c8cef6108a"></a>
- **M17-CAP-PROFILE-4fa8f7c8cef6108a**: Temporary Access
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-02d376a0bdcba529"></a>
- **M17-CAP-PROFILE-02d376a0bdcba529**: Emergency Chat
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-2e3f39ec2d20c4a2"></a>
- **M17-CAP-PROFILE-2e3f39ec2d20c4a2**: International Notifications
  Applies to original IDs: 15.

<a id="M17-CAP-PROFILE-5ba74d8fcc7b20cc"></a>
- **M17-CAP-PROFILE-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 15, 112, 266.

<a id="M17-CAP-PROFILE-d5232cbd3a326267"></a>
- **M17-CAP-PROFILE-d5232cbd3a326267**: Documentation
  Applies to original IDs: 15, 112, 266.

<a id="M17-CAP-PROFILE-5e7050206fcd07f2"></a>
- **M17-CAP-PROFILE-5e7050206fcd07f2**: # Emergency Contacts
  Applies to original IDs: 112, 266.

<a id="M17-CAP-PROFILE-f46e10af70055b66"></a>
- **M17-CAP-PROFILE-f46e10af70055b66**: Stores
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-6b2ac1f5af4411d9"></a>
- **M17-CAP-PROFILE-6b2ac1f5af4411d9**: Family
  Applies to original IDs: 112, 266.

<a id="M17-CAP-PROFILE-52a3545c159968e0"></a>
- **M17-CAP-PROFILE-52a3545c159968e0**: Doctor
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-cf2218818c8100db"></a>
- **M17-CAP-PROFILE-cf2218818c8100db**: Caregiver
  Applies to original IDs: 112, 266.

<a id="M17-CAP-PROFILE-8d6cfb0da4e7b498"></a>
- **M17-CAP-PROFILE-8d6cfb0da4e7b498**: Lawyer (Optional)
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-e4a7d395f869c9ae"></a>
- **M17-CAP-PROFILE-e4a7d395f869c9ae**: Insurance
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-fc1b44c1d4878793"></a>
- **M17-CAP-PROFILE-fc1b44c1d4878793**: Functions
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-4ac3308397c33440"></a>
- **M17-CAP-PROFILE-4ac3308397c33440**: One-touch Call
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-88e65e1525989565"></a>
- **M17-CAP-PROFILE-88e65e1525989565**: SMS
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-98cad0afe0a935f7"></a>
- **M17-CAP-PROFILE-98cad0afe0a935f7**: Emergency Notification
  Applies to original IDs: 112.

<a id="M17-CAP-PROFILE-4fbeeb87456accf5"></a>
- **M17-CAP-PROFILE-4fbeeb87456accf5**: Supports
  Applies to original IDs: 266.

<a id="M17-CAP-PROFILE-55faff639138dc86"></a>
- **M17-CAP-PROFILE-55faff639138dc86**: Physician
  Applies to original IDs: 266.

<a id="M17-CAP-PROFILE-a9e2af6b28462deb"></a>
- **M17-CAP-PROFILE-a9e2af6b28462deb**: Legal Representative
  Applies to original IDs: 266.

<a id="M17-CAP-PROFILE-aa9b2a1758c9a2f4"></a>
- **M17-CAP-PROFILE-aa9b2a1758c9a2f4**: Notifications follow the patient's consent settings.
  Applies to original IDs: 266.
