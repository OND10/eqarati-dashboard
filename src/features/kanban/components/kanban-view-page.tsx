import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { KanbanBoard } from './kanban-board';
import NewTaskDialog from './new-task-dialog';
import { getServerLanguage, translate } from '@/lib/i18n';

export default async function KanbanViewPage() {
  const lang = await getServerLanguage();
  
  return (
    <PageContainer>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title={translate(lang, 'Kanban')}
            description={translate(lang, 'Manage tasks by dnd')}
          />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </PageContainer>
  );
}
