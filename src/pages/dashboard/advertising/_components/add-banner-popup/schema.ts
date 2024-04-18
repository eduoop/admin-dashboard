import { z } from 'zod';

export const CreateBannerSchemaForm = z.object({
	name: z
		.string({ required_error: 'É necessário adicionar o comentário' })
		.max(100, { message: 'Máximo de 100 caracteres' })
		.min(2, { message: 'O nome precisa ter pelo menos 2 caracteres' }),
        comments: z
		.string({ required_error: 'É necessário adicionar o comentário' })
		.min(1, { message: 'É necessário adicionar o comentário' }),
	image: z
		.instanceof(File, {
			message: 'Adicione uma imagem',
		})
});

export type CreateBannerForm = z.infer<typeof CreateBannerSchemaForm>;
