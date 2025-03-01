create table transactions (
    id uuid primary key default gen_random_uuid(),
    user_profile uuid not null references public.profiles (id) default auth.uid() on delete cascade,
    category text check (category in ('Food', 'Bills', 'Entertainment', 'Investment', 'Other')),
    amount numeric not null,
    transaction_type text check (transaction_type in ('Expense', 'Income')) not null,
    payment_method text check (payment_method in ('Card', 'UPI', 'Crypto', 'Cash')),
    transaction_date timestamp default now(),
    notes text,
    created_at timestamp default now()
);
