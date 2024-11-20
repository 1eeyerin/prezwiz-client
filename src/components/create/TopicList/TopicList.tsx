import LoadingComponent from '@/components/common/LoadingComponent';
import Slide from '@/components/create/Slide/Slide';
import SlideCreationLoading from '@/components/create/SlideCreationLoading';
import SubmitButton from '@/components/create/SubmitButton';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';
import useSlideOutline from '@/hooks/useSlideOutline';
import AddSlideButton from './AddSlideButton';
import SlideContainer from './SlideContainer';

type TopicListProps = {
  onNext: () => void;
};

const TopicList = ({ onNext }: TopicListProps) => {
  const { presentationId, outlines: initialOutlines } = useCreationSlideQueries();

  const {
    outlines,
    isAdding,
    isPending,
    handleDeleteOutline,
    handleEditOutline,
    handleAddOutline,
    handleNewOutline,
    handleSubmit,
    handleCancelAdd,
  } = useSlideOutline(initialOutlines, presentationId!);

  const handleNext = async () => {
    await handleSubmit();
    onNext();
  };

  return (
    <LoadingComponent isLoading={isPending} fallback={<SlideCreationLoading />}>
      <div className="space-y-8">
        <SlideContainer outlines={outlines} onDelete={handleDeleteOutline} onEdit={handleEditOutline} />
        {isAdding && (
          <Slide isEditing slideNumber={outlines.length + 1} onDelete={handleCancelAdd} onEdit={handleNewOutline} />
        )}
        <AddSlideButton onClick={handleAddOutline} />
        <SubmitButton onClick={handleNext} />
      </div>
    </LoadingComponent>
  );
};

export default TopicList;
