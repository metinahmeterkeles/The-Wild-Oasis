import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yrttfbphkfyzlrtshqdu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydHRmYnBoa2Z5emxydHNocWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MzA1MjIsImV4cCI6MjAzMTAwNjUyMn0.fI4Ro9hLOdMLPYiUM6VtOxn3JHvzUj6aBdFEuYflXsc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
