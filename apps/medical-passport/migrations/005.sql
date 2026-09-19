ALTER TABLE notifications ADD COLUMN suppressed_by_settings INTEGER NOT NULL DEFAULT 0 CHECK(suppressed_by_settings IN(0,1));
