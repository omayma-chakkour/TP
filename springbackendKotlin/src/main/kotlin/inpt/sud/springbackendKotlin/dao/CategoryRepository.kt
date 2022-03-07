package inpt.sud.springbackendKotlin.dao

import inpt.sud.springbackendKotlin.data.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

@CrossOrigin("*")

@RepositoryRestResource
interface CategoryRepository : JpaRepository<Category?, Long?>