use anchor_lang::prelude::*;

declare_id!("4nmmrstyEFQpPXwW64rbmGgH9t8romXUR3dfRPUVzSP9");

#[program]
pub mod contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
