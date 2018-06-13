import { BooklistModule } from './booklist.module';

describe('BooklistModule', () => {
    let booklistModule: BooklistModule;

    beforeEach(() => {
        booklistModule = new BooklistModule();
    });

    it('should create an instance', () => {
        expect(booklistModule).toBeTruthy();
    });
});
