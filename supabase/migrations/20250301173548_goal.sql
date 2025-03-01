create table goals (
    id uuid default uuid_generate_v4(),
    user_profile uuid not null references public.profiles (id) default auth.uid() on delete cascade,
    goal_name text not null,
    goal_type text check (goal_type in ('Savings', 'Investment', 'Debt Repayment')),
    target_amount numeric not null,
    current_amount numeric default 0,
    deadline timestamp,
    status text check (status in ('In Progress', 'Completed')) default 'In Progress',
    created_at timestamp default now(),
  
    primary key (id)
);