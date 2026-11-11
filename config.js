/* Datu glabāšana. Atstāj tukšu, ja gribi tikai lokālo serveri / pārlūka localStorage.
   Supabase: ieraksti projekta URL un PUBLISHABLE (anon) atslēgu. Tā drīkst būt publiska:
   ar to var tikai izsaukt funkcijas no db/youth.sql, tabulām piekļuves nav.
   NEKAD šeit nelīmē secret / service_role atslēgu. */
window.YOUTH_CFG = {
  supabaseUrl: '',
  supabaseKey: '',
};
