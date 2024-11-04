ALTER TABLE "user" ADD COLUMN "detailsComplete" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "vote" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;