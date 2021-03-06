/**
 * Copyright 2017-2018 the original author or authors from the JHipster Online project.
 *
 * This file is part of the JHipster Online project, see https://github.com/jhipster/jhipster-online
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhonlineTestModule } from '../../../test.module';
import { UserMgmtDeleteDialogComponent } from 'app/admin/user-management/user-management-delete-dialog.component';
import { UserService } from 'app/core';

describe('Component Tests', () => {
    describe('User Management Delete Component', () => {
        let comp: UserMgmtDeleteDialogComponent;
        let fixture: ComponentFixture<UserMgmtDeleteDialogComponent>;
        let service: UserService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [JhonlineTestModule],
                    declarations: [UserMgmtDeleteDialogComponent],
                    providers: [UserService]
                })
                    .overrideTemplate(UserMgmtDeleteDialogComponent, '')
                    .compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(UserMgmtDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete('user');
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith('user');
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
