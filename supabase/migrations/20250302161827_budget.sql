create table budgets (
    id uuid primary key default gen_random_uuid(),
    user_profile uuid not null references public.profiles (id) default auth.uid() on delete cascade,
    monthly_budget numeric not null,
    spent_amount numeric default 0,
    remaining_budget numeric generated always as (monthly_budget - spent_amount) stored,
    created_at timestamp default now()
);
