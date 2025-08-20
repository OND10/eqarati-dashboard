import { createRoute } from '@tanstack/react-router'
import { AuthRoute } from '../../main'
import CreateUserPage from '../../../../features/common_services/users/pages/create-user-page'

export const CreateUserRoute = createRoute({
  getParentRoute: ()=>AuthRoute,
  path : "/common-services/create-user",
  component : CreateUserPage
})
