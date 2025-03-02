create table investment_recommendations (
    id uuid primary key default gen_random_uuid(),
    user_profile uuid not null references public.profiles (id) default auth.uid() on delete cascade,
    recommended_investment text not null,
    investment_type text check (investment_type in ('Stocks', 'Crypto', 'Mutual Funds', 'Real Estate')),
    expected_return numeric,
    risk_level text check (risk_level in ('Low', 'Moderate', 'High')),
    created_at timestamp default now()
);